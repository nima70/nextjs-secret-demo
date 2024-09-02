export default function Home() {
  return (
    <div>
      <h1>Environment Variable Demo</h1>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
