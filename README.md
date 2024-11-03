# TalkSpark: AI-Powered Conversation Starter

TalkSpark is a cool app that uses OpenAI to give you great conversation starters. Just type in someone's name, and TalkSpark will find their social media profiles online. It looks at their info and interests to make custom icebreakers for you. This helps you start enjoyable chats with new people.

**Link to project:** [https://talk-spark-frontend.vercel.app/](https://talk-spark-frontend.vercel.app/)

**Frontend Repo:** https://github.com/RutamBhagat/talk_spark_frontend

**Backend Repo:** https://github.com/RutamBhagat/talk_spark_langgraph

## Demo Video

https://github.com/user-attachments/assets/c14feb87-ede0-4cf9-a8ab-65af7b7f06c2

## How It's Made

**Tech used:** LangChain, LCEL, LangGraph, Next.js, FASTAPI, Python, TavilyAPI, ProxyCurl

TalkSpark uses LangGraph, which is framework used to build Agentic apps with LLMs. It combines LangGraph Nodes, chains, custom tools (Tavily) for web search, and structured output parsers to connect to peoples LinkedIn. This lets it pull public profile data from Linkedin. TalkSpark uses TavilyAPI, ProxyCurl helps TalkSpark grabs info from websites by web scraping. The LangGraph agents then process this data to make personalized profiles, fun facts, and custom icebreaker questions.

TalkSpark's code is built in sections and is completely modularized, so you can add more data sources like twitter and facebook easily. Also can you switch language models. The front-end uses Next.js to make it simple to use.

## Optimizations

To ensure optimal performance and scalability, TalkSpark employs several optimization techniques:

1. **Caching**: Frequently accessed social media profiles and web pages are cached to reduce redundant requests and improve response times.
2. **Asynchronous Processing**: Web scraping and data processing tasks are executed asynchronously, enabling TalkSpark to handle multiple requests concurrently without sacrificing responsiveness.

## Lessons Learned

Building TalkSpark taught me a ton about using LLMs, Langchain, LCEL, LangGraph and web scraping tools in really cool ways, like:

- Combining multiple data sources and LLMs into one smooth app.
- Making custom agents and tools for LangGraph to do exactly what I needed.
- Optimizing web scraping to make it fast and reliable.
- Adding async processing and caching to make things speedy.

This project made me really excited about using Langgraph to solve practical problems and help people connect better.

## Examples

Here are a few examples showcasing TalkSpark's capabilities:

![Screenshot 2024-11-04 015402](https://github.com/user-attachments/assets/158c009a-94e0-4bdb-bb72-f87886b30edd)

![Screenshot 2024-11-04 015441](https://github.com/user-attachments/assets/a082e589-39ba-4ab8-9897-a8bf19e489f9)

![Screenshot 2024-11-04 015456](https://github.com/user-attachments/assets/899708ac-2206-4f56-8635-a8e9109acf5f)

![Screenshot 2024-11-04 015504](https://github.com/user-attachments/assets/c39f1f58-ad52-44f9-8610-ccfd8277b60c)
