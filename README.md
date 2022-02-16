# 🚀 Welcome to my Nicasource Blog Assessment

These are the instructions to run the backend on your computer.

## Install dependencies

```bash
npm install
# or
yarn install
```

## Setup environment variables

Open the project in your favorite code editor.
Look for the .env file and write the following information:

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=jlZg9IvNYLxsCyeMN9C6fQ==,RxEHrKdG4OjqDy5N8ce8Qw==,A7CWrlC0+32qThC7lzU7gA==,v0RrAh2BbHD7VHYgbCY7Cw==
JWT_SECRET=b0a3401f-e7cb-4a34-b99c-a71d635ca7b7
API_TOKEN_SALT=3aa7045f878d1db632c93a31fd4423a5
```

## Run

Start the Strapi Backend
```
npm run start
# or
yarn start
```

## Go the administration panel

To fill the backend with information, you have to go to the administration panel on http://localhost:1337/admin.
Make sure to create an user to login when needed.

## Fill the backend with information

In order to showcase some information on the frontend create 1 author and at least 10 blog post.

Leave the backend up and running and go <a href="https://github.com/celesmedina/nicasource-blog-frontend">here</a> to setup the app's frontend



