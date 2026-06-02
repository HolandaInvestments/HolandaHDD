export type ChatbotEntry = {
  keywords: string[];
  answer: string;
};

export const initialChatbotMessage =
  "Hi! I'm the Holanda Investments assistant. I can help you understand our HDD services, machine maintenance support, and operator training options. How can I help you today?";

export const chatbotKnowledge: ChatbotEntry[] = [
  {
    keywords: ["what is hdd", "horizontal directional drilling", "directional drilling"],
    answer:
      "Horizontal Directional Drilling, often called HDD, is a trenchless method used to install underground utilities with less surface disruption than open-cut trenching."
  },
  {
    keywords: ["fiber", "optic", "telecom", "internet"],
    answer:
      "Holanda Investments supports underground fiber optic and telecom installation using HDD methods for utility crossings, road passages, and network expansion projects."
  },
  {
    keywords: ["energy", "electric", "water", "gas", "utility", "utilities"],
    answer:
      "Our HDD services can support underground utility installation for electrical conduits, water lines, gas lines, telecom infrastructure, and other project-specific utility needs."
  },
  {
    keywords: ["repair", "maintenance", "machine", "equipment", "diagnostic"],
    answer:
      "We provide HDD machine support that can include diagnostics, preventive maintenance, corrective repair guidance, field support, and equipment performance review."
  },
  {
    keywords: ["operator", "training", "course", "class"],
    answer:
      "We offer in-person practical training for HDD machine operators, with attention to equipment operation, jobsite safety, productivity, and basic troubleshooting."
  },
  {
    keywords: ["locator", "guide", "path", "tracking"],
    answer:
      "Locator training helps participants understand underground path locating, reading jobsite conditions, communication with operators, and safer directional drilling practices."
  },
  {
    keywords: ["quote", "estimate", "request", "price", "contact"],
    answer:
      "You can request a quote through the contact form. Include the service type, project location, utility type, approximate drilling distance, and your preferred contact method."
  },
  {
    keywords: ["whatsapp", "phone", "message"],
    answer:
      "Use the WhatsApp button to start a conversation with Holanda Investments. The button opens a pre-filled message so you can quickly request service information."
  }
];

export function getChatbotAnswer(message: string) {
  const normalized = message.toLowerCase();
  const entry = chatbotKnowledge.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  return (
    entry?.answer ||
    "I can help with HDD services, utility installation, machine repair, maintenance, operator training, locator training, quotes, and WhatsApp contact. What would you like to know?"
  );
}
