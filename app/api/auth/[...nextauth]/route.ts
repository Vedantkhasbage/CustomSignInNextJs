import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitlabProvider from "next-auth/providers/gitlab";

const handler=NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email and password",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "vedant" },
            password: { label: "Password", type: "password", placeholder:"12345" }
          },
          async authorize(credentials, req) {
    
            console.log(credentials?.username)
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
          GitlabProvider({
            clientId: "",
            clientSecret: ""
          })
      ],
     pages:{
        signIn:"/auth/signIn"
     },
     secret:process.env.NEXTAUTH_SECRET
      })
    export {handler as GET,handler as POST}