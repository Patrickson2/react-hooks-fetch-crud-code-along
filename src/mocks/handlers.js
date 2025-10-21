import { rest } from "msw";

let items = [
  { id: 1, name: "Yogurt", category: "Dairy", isInCart: false },
  { id: 2, name: "Pomegranate", category: "Produce", isInCart: false },
  { id: 3, name: "Lettuce", category: "Produce", isInCart: false },
];

export const handlers = [
  rest.get("http://localhost:8001/items", (req, res, ctx) => {
    return res(ctx.json(items));
  }),

  rest.post("http://localhost:8001/items", async (req, res, ctx) => {
    const newItem = await req.json();
    items.push(newItem);
    return res(ctx.json(newItem));
  }),

  rest.patch("http://localhost:8001/items/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const updated = await req.json();
    items = items.map((item) =>
      item.id === parseInt(id) ? { ...item, ...updated } : item
    );
    return res(ctx.json(updated));
  }),

  // ✅ Important: DELETE handler
  rest.delete("http://localhost:8001/items/:id", (req, res, ctx) => {
    const { id } = req.params;
    items = items.filter((item) => item.id !== parseInt(id));
    return res(ctx.status(200));
  }),
];

export function resetData() {
  items = [
    { id: 1, name: "Yogurt", category: "Dairy", isInCart: false },
    { id: 2, name: "Pomegranate", category: "Produce", isInCart: false },
    { id: 3, name: "Lettuce", category: "Produce", isInCart: false },
  ];
}
