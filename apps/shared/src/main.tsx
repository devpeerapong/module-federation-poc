let remotes = {
  host_rsbuild: "host_rsbuild@http://localhost:3001/mf-manifest.json",
  host_webpack: "host_webpack@http://localhost:3002/mf-manifest.json",
  host_cra: "host_cra@http://localhost:3003/mf-manifest.json",
  host_vite: "host_vite@http://localhost:3004/mf-manifest.json",
  host_next:
    "host_next@http://localhost:3005/_next/static/chunks/remoteEntry.js",
};

export function createRemotes<Host extends keyof typeof remotes>(host: Host) {
  let clone = { ...remotes };

  delete clone[host];

  return clone as Omit<typeof remotes, Host>;
}

export function Navigation() {
  return (
    <nav style={{ marginBlock: "20px" }}>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {Object.keys(remotes).map((remote) => {
          const url = new URL(
            remotes[remote as keyof typeof remotes].split("@")[1]
          );
          url.pathname = "";

          return (
            <li key={remote}>
              <a href={url.toString()}>
                {remote.replace("host_", "").replace("_", " ").toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
