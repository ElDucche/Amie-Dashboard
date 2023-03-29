import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                username:{
                    label:"Username",
                    type: "text",
                    placeholder:"Exemple"
                },
                password:{
                    label: "Mot de passe",
                    type: 'password',
                },
            },
            authorize: (credentials) => {
                //Recherche dans la db
                if (credentials.username === 'test' && credentials.password === 'test') {
                    return {
                        id: 2,
                        name: 'Test',
                        email: 'test@mgen.fr',
                    };
                }
                // Fail
                return null
            },
        })
    ],
    callbacks: {
        jwt: ({token, user}) => {
            //
            if (user) {
                token.id = user.id
            }
            return token;
        },
        session: ({session, token}) => {
            if (token) {
                session.id = token.id;
            }
            return session;
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
    pages: {
        signIn: "/auth/signIn",
    }
})