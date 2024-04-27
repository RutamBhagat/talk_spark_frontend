import Icons from "../shared/icons";

export default async function Hero() {
  return (
    <section>
      <div className="container flex w-full flex-col items-center justify-center space-y-20 py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="mx-auto w-full max-w-2xl ">
          <a
            href="https://twitter.com/rutamstwt/status/1661645764697919489"
            title="Follow Updates"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors duration-300 hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 text-blue-700" />
            <p className="text-sm font-semibold text-blue-700">Introducing TalkSpark</p>
          </a>
          <h1 className=" text-balance bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent  drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
            Quick Conversation Starter for Engaging Interactions
          </h1>
          <p className="mt-6 text-balance text-center text-muted-foreground md:text-xl">
            Powered by Langchain Agents to provide tailored icebreakers and personal insights.
          </p>
        </div>
      </div>
    </section>
  );
}
