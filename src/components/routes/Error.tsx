import { HeaderNavigation } from "../Navigation/HeaderNavigation";

export function ErrorPage() {
    return (
        <>
            <HeaderNavigation />
            <main>
                <h1>An error occured</h1>
                <p>This page does not exist</p>
            </main>
        </>
    );
}
