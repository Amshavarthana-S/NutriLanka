const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

async function request(path, opts = {}) {
  const headers = opts.headers || {};
  if (!headers['Content-Type'] && !(opts.body instanceof FormData)) headers['Content-Type'] = 'application/json';
  const token = localStorage.getItem('token');
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${BASE}${path}`, {...opts, headers, credentials: 'include'});
  const text = await res.text();
  let data;
  try { data = JSON.parse(text || '{}'); } catch(e) { data = { raw: text }; }
  if (!res.ok) throw data;
  return data;
}

export const auth = {
  signup: (payload) => request('/api/auth/signup', { method:'POST', body: JSON.stringify(payload) }),
  login: (payload)  => request('/api/auth/login', { method:'POST', body: JSON.stringify(payload)}),
  me: () => request('/api/auth/me').catch(()=>null)
};

export const dataApi = {
  listFood: (q) => request(`/api/data/food${q?('?q='+encodeURIComponent(q)):''}`),
  getFood: (id) => request(`/api/data/food/${id}`),
  createFood: (payload) => request('/api/data/food', { method:'POST', body: JSON.stringify(payload) }),
  listMealPlans: () => request('/api/data/mealplans'),
  createMealPlan: (payload) => request('/api/data/mealplans', { method:'POST', body: JSON.stringify(payload) }),
  calcBmi: (payload) => request('/api/data/calc/bmi', { method:'POST', body: JSON.stringify(payload) })
};
