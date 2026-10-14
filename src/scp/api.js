import { useEffect, useState } from "react";

export const SERIES = [
  { label: "I", start: 1, end: 999 },
  { label: "II", start: 1000, end: 1999 },
  { label: "III", start: 2000, end: 2999 },
  { label: "IV", start: 3000, end: 3999 },
  { label: "V", start: 4000, end: 4999 },
  { label: "VI", start: 5000, end: 5999 },
  { label: "VII", start: 6000, end: 6999 },
  { label: "VIII", start: 7000, end: 7999 },
  { label: "IX", start: 8000, end: 8999 },
];

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

// GET sur l'API SCP → { status: "loading" | "ok" | "notfound" | "error", data }
export function useApi(path) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let alive = true; // ignore une réponse arrivée après un changement de page
    setState({ status: "loading" });
    fetch(API_URL + path)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => alive && setState({ status: "ok", data }))
      .catch((err) => alive && setState({ status: err === 404 ? "notfound" : "error" }));
    return () => {
      alive = false;
    };
  }, [path]);

  return state;
}
