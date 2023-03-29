'use client'
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

function AuthCheck({ children }: {children: ReactNode}) {
  const router = useRouter();

  // Vérifier si une session existe
  //@ts-ignore
  const [session, loading] = getSession();

  // Si la session est en cours de chargement, afficher une icône de chargement
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  // Si une session existe, renvoyer les enfants
  if (session) {
    return children;
  }

  // Si aucune session n'existe, rediriger vers la page de connexion
  router.push("/auth/signIn");
  return null;
}

export default AuthCheck