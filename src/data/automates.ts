import type { PillarItem } from "../types";

export const automates: PillarItem[] = [
  {
    id: "ops-assistant",
    category: "AI & Automation",
    title: "AI-Powered Order Tracking & Delivery Automation System",
    description:
      "An end-to-end web and automation project built with n8n, Google Sheets, HTML, CSS, and JavaScript. Includes customer order management, order confirmations, rider assignment, delivery tracking, automated notifications, and delivery confirmation.",
    image: `${import.meta.env.BASE_URL}projects/Order.png`,
    tools: ["AI", "n8n", "HTML", "CSS", "JavaScript", "Google Sheets"],
    caseStudy:
      "https://github.com/ImpeccableFame/Order-Tracking-and-Delivery-System",
  },
  {
    id: "order-flow",
    category: "AI & Automation",
    title: "HireFlow: AI-Powered Recruitment Automation System",
    description:
      "HireFlow is an end-to-end recruitment web and automation system built with n8n, Google Sheets, AI, Gmail, HTML, CSS, and JavaScript. It automates candidate management, recruitment workflows, communication, and key hiring processes from application to selection.",
    image: `${import.meta.env.BASE_URL}projects/Hireflow.png`,
    tools: [
      "n8n",
      "Webhooks",
      "HTML",
      "CSS",
      "JavaScript",
      "Google Sheets",
      "Gmail",
      "AI",
    ],
    caseStudy:
      "https://github.com/ImpeccableFame/Recruitment-Automation-System",
  },

  {
    id: "lead-flow",
    category: "AI & Automation",
    title:
      "LeadFlow: AI-Powered Lead Capture & Qualification Automation System",
    description:
      "LeadFlow LeadFlow is a full-stack web and automation project that captures website enquiries, stores lead data in Supabase, and processes submissions through n8n for automated qualification, scoring, and classification. It combines a modern Next.js interface with backend APIs, database integration, workflow automation, and a real-time lead management dashboard.",
    image: `${import.meta.env.BASE_URL}projects/LeadFlow.png`,
    tools: ["n8n", "Webhooks", "HTML", "CSS", "Next.js", "Supabase"],
    caseStudy: "https://github.com/ImpeccableFame/LeadFlow",
  },

  {
    id: "add-automation",
    category: "AI & Automation",
    title: "Smart Inventory Automation System",
    description:
      "A full-stack web and automation project built with n8n, Google Sheets, HTML, CSS, and JavaScript that synchronizes inventory across physical and online sales channels, prevents duplicate online orders, sends low-stock alerts, and provides an admin dashboard and customer storefront.",
    image: `${import.meta.env.BASE_URL}projects/Inventory.png`,
    tools: [
      "n8n",
      "Webhooks",
      "HTML",
      "CSS",
      "JavaScript",
      "Google Sheets",
      "Gmail",
      "AI",
    ],
    caseStudy: "https://github.com/ImpeccableFame/Smart-Inventory-Automation",
  },
];
