import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";


const handler=NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email and password",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "vedant" },
            password: { label: "Password", type: "password", placeholder:"12345" }
          },
          async authorize(credentials, req) {
            console.log("hello world");
            
            console.log(credentials?.username)
            console.log("hello world");
            console.log(credentials?.password)
              const user={
                name:"vedant",
                id:"12",
                username:"vedant@gmail.com"
            }
    
            if (user) {
              return user
            } else {
              return null
                  }
          }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
          }),
          DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
          })
      ],
      callbacks: {
        async signIn({ user, account, profile }) {
            console.log("Sign-In Details:");
            console.log("User:", user);
            console.log("Account:", account);
            console.log("Profile:", profile);

            // Optional: You can add logic here to check if the user already exists in your database.
            return true; // Allow sign-in
        }},
     pages:{
        signIn:"/auth/signIn"
     },
     secret:process.env.NEXTAUTH_SECRET
      })
    export {handler as GET,handler as POST}