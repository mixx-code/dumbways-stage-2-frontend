import { useAuth } from "@/hooks/userAuth";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}: {children : ReactNode}){
    const {token} = useAuth();
    if(!token) return <Navigate to="/" replace />
    return<>{children}</>
}