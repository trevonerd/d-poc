import styles from './page.module.css';

async function getPageStructure(urlPath: string) {
  const res = await fetch(`http://localhost:3000/api/pageStructure/?urlPath=${urlPath}`);
  return res.json();
}

export default async function Page({
  params,
}: {
  params: { pageName: string[] };
}) {
  const pageName = params.pageName.join('/');

  const pageStructureFetch = getPageStructure(pageName);

  const [pageStructure] = await Promise.all([pageStructureFetch]);

  return (
    <main className={styles.main}>
      <h1>
        <span className={styles.route}>[{pageName}]</span> - page structure:
      </h1>
      <pre className={styles.json}>{JSON.stringify(pageStructure)}</pre>
    </main>
  );
}
