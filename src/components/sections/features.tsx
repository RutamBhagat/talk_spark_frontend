import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  MessageCircle,
  BarChart,
  Code2,
  Share2,
  UserCircle,
  MessagesSquare,
  BookMarked,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Profiles",
    description:
      "Personal profiles with key details, interesting facts, and topics of interest.",
  },
  {
    icon: MessageCircle,
    title: "Smart Icebreakers",
    description:
      "Curated questions and conversation starters tailored to the individual.",
  },
  {
    icon: BarChart,
    title: "Conversation Analytics",
    description:
      "Analytics and insights to help improve your conversation skills over time.",
  },
  {
    icon: Code2,
    title: "Langchain Integration",
    description:
      "Built using Langchain, a framework for developing applications with LLMs.",
  },
  {
    icon: Share2,
    title: "Social Integration",
    description:
      "Integration with popular social media platforms to fetch public profile data.",
  },
  {
    icon: UserCircle,
    title: "Personality Insights",
    description:
      "Personalized conversation guides based on communication style.",
  },
  {
    icon: MessagesSquare,
    title: "Real-time Suggestions",
    description:
      "Real-time suggestions for follow-up questions to keep conversations flowing.",
  },
  {
    icon: BookMarked,
    title: "Conversation History",
    description:
      "Ability to save and review past conversations for future reference.",
  },
  {
    icon: FileText,
    title: "Sharable Summaries",
    description:
      "Sharable conversation summaries and highlights for easy recapping.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Kickstart conversations and build rapport with these powerful
            features
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
