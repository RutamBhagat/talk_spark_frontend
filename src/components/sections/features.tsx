import { Card } from "@nextui-org/react";

export default function Features() {
  return (
    <section>
      <div className="container space-y-6 rounded-md bg-gray-100 py-14 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-4xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] text-balance leading-normal text-primary/70 sm:text-lg sm:leading-7">
            This app comes with features to help you kickstart conversations and build rapport
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 text-center sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-20">
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white rounded-md p-6">
            <p className="text-balance text-sm text-muted-foreground">
              AI-powered personal profiles with key details, interesting facts, and topics of interest.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white rounded-md p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Curated icebreaker questions and conversation starters tailored to the individual.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white rounded-md p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Analytics and insights to help improve your conversation skills over time.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white rounded-md p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Built using Langchain, a framework for developing applications with large language models.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white rounded-md p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Integration with popular social media platforms to fetch public profile data.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Personalized conversation guides based on the individual's personality traits and communication style.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Real-time suggestions for follow-up questions and prompts to keep the conversation flowing naturally.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Ability to save and review past conversations for future reference.
            </p>
          </Card>
          <Card className="flex h-[160px] flex-col items-center justify-center bg-white p-6">
            <p className="text-balance text-sm text-muted-foreground">
              Shareable conversation summaries and highlights for easy recapping.
            </p>
          </Card>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="font-medium leading-normal text-primary/70 sm:text-lg sm:leading-7">Spark Engaging Dialogues</p>
        </div>
      </div>
    </section>
  );
}
