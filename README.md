# Squid AI image generator

This sample showcases how to integrate an application with the Squid AI image generator.

## Prerequisites

For this project you will need:

- NodeJS v18 or later.
- [Vite](https://vitejs.dev/).
- A Squid Cloud account and a Squid application. To sign up for Squid, go to [Squid Cloud Console](https://console.squid.cloud). Once signed up, you can create an application.
- The Squid Cloud CLI (`npm i @squidcloud/cli`).

## Environment configuration

### Setting up your `.env` file

After cloning this project, go to the [Squid Cloud Console](https://console.squid.cloud), create an application (if haven't done so already) and click the **Create .env file** button under **Backend project**. This provides you with the command to create the `.env` file required for the project.

Change to the backend directory, and install the required dependencies:

```bash
cd image-generation-backend
npm install
```

Run the initialization command you copied from the console. The command has the following format:

```bash
squid init-env \
 --appId YOUR_APP_ID \
 --apiKey YOUR_API_KEY \
 --environmentId YOUR_ENVIRONMENT_ID \
 --squidDeveloperId YOUR_SQUID_DEVELOPER_ID \
 --region YOUR_REGION
```

### Finalizing setup

Complete the environment setup with the following steps, ensuring you're in the `backend` directory:

```bash
npm run copy-squid-dotenv
```

This command prepares your `.env` file for the Vite environment by generating a `frontend/.env.local` file.

## Running the application

### Starting the local backend server

To launch the local backend server of your Squid application, run the following command from the `image-generation-backend` directory:

```bash
squid start
```

You'll see output similar to the following, indicating that your server is up and running:

```bash
> nodemon --watch ./src --exec ts-node -r tsconfig-paths/register src/main.ts
[Nest] 68047  - 03/15/2024, 7:55:23 PM     LOG [NestApplication] Nest application successfully started +1ms
```

### Launching the frontend server

Open a second terminal window. You should now have two terminal windows open: one running the local backend server, and one in which you will run the frontend. Initialize the frontend server by running the following commands:

```bash
cd image-generation-frontend
npm install
npm run dev
```

Verify that Vite server has started, providing the URL to access your app:

```bash
  VITE v5.1.6  ready in 149 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Exploring your Squid application

Write a prompt in the text field and click **Generate image**. Once loading is complete, the newly generated image appears in the view.

## Next steps

To learn more about the Squid AI image generator, [view the documentation](https://docs.squid.cloud/docs/ai/generate-image). You can also check out all the other cool features of [Squid AI](https://docs.squid.cloud/docs/ai) to find out how Squid AI can supercharge your Squid apps.
