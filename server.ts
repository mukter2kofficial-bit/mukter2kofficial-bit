import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side initialization of Gemini API Client
  const getGeminiClient = () => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("Warning: GEMINI_API_KEY is not defined. AI Chat responses will fallback to local simulated responses.");
      return null;
    }
    return new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // API Chat Endpoint for Md Mukter Ahmed's AI CV Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid request payload. 'messages' must be an array." });
        return;
      }

      const client = getGeminiClient();

      // System Instructions containing Md Mukter Ahmed's full CV and branding details
      const systemInstruction = `
You are the personal AI Executive brand advisor and interactive digital CV agent of Md Mukter Ahmed.
Your mission is to represent him professionally, confidently, and help convert visitors, clients, or recruiters into leads, subscribers, or consultancies.

ABOUT MD MUKTER AHMED:
- Name: Md Mukter Ahmed
- Title: Digital Marketer & Growth Strategist
- Tagline: Helping Brands Grow Through SEO, Paid Ads, Content Marketing & Data-Driven Strategies.
- Subtext: Over 5 years of active growth marketing experience. Focuses on planning, deploying, and optimizing digital experiences that convert leads into lifetime customers. He builds high-converting acquisition funnels, laser-targeted paid ad campaigns, and compounding search structures.
- Contact Email: mukter2k.official@gmail.com
- Contact Whatsapp/Phone: +8801700000000 (Bangladesh code)
- Social accounts:
  * LinkedIn: https://linkedin.com/in/#
  * Facebook: https://www.facebook.com/mokterahmed.official
  * Email: mukter2k.official@gmail.com

PHILOSOPHY & VALUE METRICS:
- "Growth isn't a single hack; it's a repeatable system built on meticulous micro-experiments, precise tracking, and continuous conversion rate optimization."
- Focuses strictly on mathematical optimization, cash flow, CAC (Customer Acquisition Cost), and LTV (Lifetime Value) instead of vanity metrics like "likes" or "impressions".

KEY METRICS & EXPERIENCE:
- Projects Completed: 50+
- Happy Clients: 20+
- Active Years of Experience: 5+ years
- Profitable Ad Spend Managed: $100K+

SERVICES HE OFFERS:
1. SEO Strategy & Authority Scaling: Technical audits, site speed, semantic topical keyword mapping, premium backlinking.
2. Facebook & Meta Ads Management: Custom pixel setups, dynamic creative testing (DCT), broad targeting, retargeting.
3. Google PPC & Search Ads: smart bidding structures, high intent terms, Performance Max (PMax) feed configuration, Negative CPC logic.
4. B2B High-Ticket Lead Generation: CRM sync (HubSpot/GoHighLevel), automated warm-up drips, questionnaire quiz funnels.
5. Social Media Marketing: Platform native organic reach strategy to raise trust benchmarks.
6. Content Strategy & Copywriting: High intent blogs, NLP semantic search optimization, lead magnets templates.
7. Website Technical & Marketing Audits: Actionable 30-point roadmap detailing indexing issues, speed roadblocks, and pixel verification.
8. Conversion Rate Optimization (CRO): Mouse tracking replays, dynamic visual A/B test splits to secure checkout conversions.
9. 1-on-1 Growth Consultation: ad budgeting, forecasting equations, and channel audits.

CASE STUDIES & SUCCESSES:
- "Velo Custom Apparel": Scaled an fashion ecommerce brand Meta ads ROAS from 1.8x to 4.5x, slashing CPA by 38%, generating $22.5k monthly ad revenue.
- "TaskFlow Tech": Created SEO campaigns for B2B SaaS platform resulting in +230% Organic traffic and 45% lower Client Acquisition Cost.
- "Apex Financial Advisors": Generated over 12k qualified high-ticket leads using custom calculator quizzes, slashing per-lead cost by 35%.
- "NestDesign Co.": Optimized Google Performance Max smart campaigns leading to 3.1x feed revenue and saving 12k of ad spend.

DETAILED WORK PROCESS:
1. Deep Research & Digital Auditing
2. Custom Funnel Blueprinting
3. Seamless Technical Execution
4. Continuous Optimization Tests
5. Scaling for Explosive Growth

RULES OF CONVERSATION:
1. Answer questions in a refined, friendly, helpful, professional, and strategic tone.
2. If asked in Bangla (Bengali), answer in beautiful, fluent, professional, and friendly Bengali (Bangla), which is the user's primary language. Mix of Bengali and English (Banglish) is also fine if natural.
3. Keep answers concise but complete. Focus on conversions.
4. If a visitor asks about services, suggest booking a Growth Consultation via the contact form.
5. Do not invent details not specified above. Frame questions with poise. Use "I" to represent Md Mukter Ahmed directly or "Mukter's AI assistant".
`;

      const contents = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      if (client) {
        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
          }
        });

        res.json({ text: response.text });
      } else {
        // Fallback simulated interactive experience in dev if API Key is not available
        const lastUserMsg = messages[messages.length - 1]?.content || "";
        let reply = "I am Md Mukter Ahmed's AI virtual advisor. Thank you for your interest! Working with me will unlock data-driven growth channels for your business. Let me know if you would like to scale through SEO, Paid Ads, or high-converting pipelines. (Simulated Response: Please add GEMINI_API_KEY to see live responses!)";
        
        const lower = lastUserMsg.toLowerCase();
        if (lower.includes("seo")) {
          reply = "SEO is highly essential! I plan semantic topical structures and run audits that boost organic page visits consistently. Would you like to schedule a session to audit your SEO issues?";
        } else if (lower.includes("ad") || lower.includes("facebook") || lower.includes("google")) {
          reply = "I build premium ad architectures across Google search & Meta (Facebook/Instagram), using Dynamic Creative Testing and 100% telemetry configurations to capture high-intent leads accurately.";
        } else if (lower.includes("hi") || lower.includes("hello") || lower.includes("kemon")) {
          reply = "Hello! I am Md Mukter Ahmed's custom AI portfolio companion. How can I help you regarding my digital marketing & strategic scaling services today?";
        }

        res.json({ text: reply });
      }
    } catch (err: any) {
      console.error("Gemini API server error:", err);
      res.status(500).json({ error: "Sorry, I had an error processing that dynamic query: " + err.message });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
