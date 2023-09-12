## 💿 Installation via Python

- **Step 1**. Clone the repo
  ```sh
  git clone https://github.com/Djmcflush/RealChar.git && cd RealChar
  ```
- **Step 2**. Install requirements
  - Install [portaudio](https://people.csail.mit.edu/hubert/pyaudio/) and [ffmpeg](https://ffmpeg.org/download.html) for audio
  ```sh
  # for mac
  brew install portaudio
  brew install ffmpeg
  ```
  ```sh
  # for ubuntu
  sudo apt update
  sudo apt install portaudio19-dev
  sudo apt install ffmpeg
  ```
  - Then install all python requirements
  ```sh
  pip install -r requirements.txt
  ```
- **Step 3**. Create an empty [sqlite](https://www.sqlite.org/index.html) database if you have not done so before
  ```sh
  sqlite3 test.db "VACUUM;"
  ```
- **Step 4**. Run db upgrade
  ```sh
  alembic upgrade head
  ```
  This ensures your database schema is up to date. Please run this after every time you pull the main branch.
- **Step 5**. Setup `.env`: update API keys and select module
  ```sh
  cp .env.example .env
  ```
- **Step 6**. Run server with `cli.py` or use uvicorn directly
  ```sh
  # Build the web fronend.
  python cli.py web-build
  ```
  ```sh
  python cli.py run-uvicorn
  # or
  uvicorn cofound_ai.main:app
  ```
- **Step 7**. Run client:
  - Use **GPT4** for better conversation and **Wear headphone** for best audio(avoid echo)
  - There are two ways to access the web client:
    - **Option 1** Open your web browser and navigate to http://localhost:8000 (NOT 0.0.0.0:8000)
      - **Make sure you have ran `python cli.py web-build` before starting the server.**
    - **Option 2**: Running the client in React.
      ```sh
      cd client/web
      npm install
      npm start
      ```
      After running these commands, a local development server will start, and your default web browser will open a new tab/window pointing to this server (usually http://localhost:3000).
  - (Optional) Terminal client: Run the following command in your terminal
  ```sh
  python client/cli.py
  ```
  - (Optional) mobile client: open `client/mobile/ios/rac/rac.xcodeproj/project.pbxproj` in Xcode and run the app

## (Optional) 📀 Installation via Docker

<details><summary>👇click me</summary>

1. Docker image: you can use our docker image directly (if you are not using Apple M1/M2 CPUs)
   ```sh
   docker pull shaunly/real_char:latest
   docker tag shaunly/real_char:latest cofound-ai
   ```
   (Or you want build yourself) Build docker image
   ```sh
   python cli.py docker-build
   ```
   If you have issues with docker (especially on a non-Linux machine), please refer to https://docs.docker.com/get-docker/ (installation) and https://docs.docker.com/desktop/troubleshoot/overview/ (troubleshooting).
2. Run docker image with `.env` file

   ```sh
   python cli.py docker-run
   ```

3. Go to http://localhost:8000 (NOT 0.0.0.0:8000) to start talking or use terminal client
   ```sh
   python client/cli.py
   ```

</details>

<br/>

## 🆕! Anyscale and LangSmith integration

<details><summary>👇click me</summary>

### Anyscale

You can now use [Anyscale Endpoint](https://app.endpoints.anyscale.com/landing) to serve Llama-2 models in your CofoundAI easily! Simply register an account with Anyscale Endpoint. Once you get the API key, set this environment variable in your `.env` file:

```
ANYSCALE_ENDPOINT_API_KEY=<your API Key>
```

By default, we show the largest servable Llama-2 model (70B) in the Web UI. You can change the model name (`meta-llama/Llama-2-70b-chat-hf`) to other models, e.g. 13b or 7b versions.

### LangSmith

If you have access to LangSmith, you can edit these environment variables to enable:

```
LANGCHAIN_TRACING_V2=false # default off
LANGCHAIN_ENDPOINT=https://api.smith.langchain.com
LANGCHAIN_API_KEY=YOUR_LANGCHAIN_API_KEY
LANGCHAIN_PROJECT=YOUR_LANGCHAIN_PROJECT
```

And it should work out of the box.

</details>

<br/>

## 📍 Roadmap

- [x] Launch v0.0.3
- [ ] Create a new character via web UI
- [ ] Add additional tts service
- [ ] Better UI/UX for home page
- [ ] Better UI/UX for conversation page
- [ ] Support MultiOn
- [ ] Support SocialAGI

## 🫶 Contribute to RealChar

Please check out our [Contribution Guide](contribute.md)!

## 💪 Contributors

<a href="https://github.com/Djmcflush/RealChar">
  <img src="https://contrib.rocks/image?repo=Djmcflush/RealChar" />
</a>

## 🎲 Community

- Join us on [Discord](https://discord.gg/e4AYNnFg2F)
