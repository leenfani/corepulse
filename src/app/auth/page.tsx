async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function AuthPageDialog() {
  await sleep(3000);
  return <h1>Login Page is under developing</h1>;
}
