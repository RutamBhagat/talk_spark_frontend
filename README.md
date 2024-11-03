# TalkSpark: AI-Powered Conversation Starter

## Overview

TalkSpark is an AI-powered tool designed to generate personalized conversation starters. The application leverages OpenAI's capabilities to analyze social media profiles and create custom icebreakers, making it easier to initiate meaningful conversations with new connections.

**Frontend:** [TalkSpark UI](https://talk-spark-frontend.vercel.app/)

**Frontend Repo:** [Talk Spark Frontend](https://github.com/RutamBhagat/talk_spark_frontend)

**Backend Repo:** [Talk Spark Backend](https://github.com/RutamBhagat/talk_spark_langgraph)

## Demo Video

https://github.com/user-attachments/assets/c14feb87-ede0-4cf9-a8ab-65af7b7f06c2

## Key Features

- **Profile Analysis**: Automated system that analyzes social media profiles using LangGraph and custom tools
- **Custom Icebreakers**: Generates personalized conversation starters based on profile data
- **Multi-Platform Integration**: Supports various social media platforms through web scraping
- **Modular Architecture**: Easily extensible to include additional data sources and language models

## Technologies Used

- **Frontend**: Next.js for a responsive user interface
- **Backend**: FastAPI for efficient request handling
- **AI Integration**: LangChain, LCEL, LangGraph for AI processing
- **External Tools**: TavilyAPI for web search, jina.ai for persons data
- **Development Tools**: Python for backend processing

## Challenges and Learnings

The development process provided valuable insights into:

- Integrating multiple data sources and LLMs into a cohesive application
- Creating custom agents and tools for LangGraph
- Optimizing web scraping for reliability and performance
- Implementing async processing and caching mechanisms

## Optimizations

1. **Caching System**

   - Implemented profile and webpage caching to reduce redundant requests
   - Improved response times through efficient data storage

2. **Asynchronous Processing**
   - Concurrent handling of web scraping and data processing
   - Enhanced system responsiveness and scalability

## Getting Started

1. **Clone the Repositories**

   ```bash
   # Frontend
   git clone https://github.com/RutamBhagat/talk_spark_frontend
   # Backend
   git clone https://github.com/RutamBhagat/talk_spark_langgraph
   ```

2. **Configure Environment**

   - Set up necessary API keys
   - Configure social media integration settings

3. **Install Dependencies**
   - Follow repository-specific setup instructions
   - Ensure all required packages are installed

## Outcome

TalkSpark successfully demonstrates the practical application of AI in facilitating human connections. The system provides efficient, personalized conversation starters while maintaining scalability and performance through optimized processing techniques.

# Screenshots

![1](https://github.com/user-attachments/assets/158c009a-94e0-4bdb-bb72-f87886b30edd)
![2](https://github.com/user-attachments/assets/a082e589-39ba-4ab8-9897-a8bf19e489f9)
![3](https://github.com/user-attachments/assets/899708ac-2206-4f56-8635-a8e9109acf5f)
![4](https://github.com/user-attachments/assets/c39f1f58-ad52-44f9-8610-ccfd8277b60c)
