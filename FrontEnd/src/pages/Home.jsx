import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { ProjectsDashboard } from "../components/ProjectsDashboard";
import { RequestForm } from "../components/RequesForm";
import { Services } from "../components/Services";

export function Home() {
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(() => { });
    }, []);

    return (
        <main className="w-full min-h-[90vh]">
            <Hero />
            <Services />
            <RequestForm />
            <ProjectsDashboard />
        </main>
    )
}