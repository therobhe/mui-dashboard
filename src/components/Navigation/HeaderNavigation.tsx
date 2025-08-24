export function HeaderNavigation() {
    // Todo: Fetch the state from the local storage or context after it has changed
    const isLoggedIn = false;

    return (
        <header>
            <h2>RobNet</h2>
            {isLoggedIn && (
                <nav>
                    <div>Searchbar</div>
                    <div>Icons</div>
                </nav>
            )}
        </header>
    )
}