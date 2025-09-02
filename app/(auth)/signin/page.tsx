"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "lib/useAuth";
import { defaultOverrides } from "next/dist/server/require-hook";

export default function Home() {
    const { user, loading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading) router.replace(user ? "/dashboard" : "/signin");
    }, [loading, user, router]);
    return null;
}

