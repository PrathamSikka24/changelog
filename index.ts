import Bao from "baojs";
import { getChangelogs, getChangelogById } from './src/db/db'; // Adjust the path as necessary

const app = new Bao();

app.get("/changelog", async (ctx) => {
    const changelogs = await getChangelogs();
    return ctx.sendJson(changelogs);
});

app.get("/changelog/:id", async (ctx) => {
    const entry = await getChangelogById(ctx.params.id);
    if (entry) {
        return ctx.sendJson(entry);
    } else {
        return ctx.sendJson({ error: "Changelog entry not found" }, {status: 404});
    }
});

const PORT = 3000;
app.listen({port: PORT});
console.log(`Server running on port ${PORT}`);
