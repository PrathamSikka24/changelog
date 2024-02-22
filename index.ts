import Bao from "baojs";
import { getChangelogs, getChangelogById, insertChangelog } from './src/db/db';
import { server } from "typescript";
const app = new Bao();
interface ChangelogRequestBody {
    author: string;
    date: string;
    heading: string;
    description: string;
}




app.get("/", (ctx) => {
    let sendMessage='Welcome to the Changelog Application!'
    return ctx.sendJson( {status: 200}, );
});

app.get("/changelog", async (ctx) => {
    const changelog = await getChangelogs();
    return ctx.sendJson(changelog);
});

app.get("/changelog/:id", async (ctx) => {
    const entry = await getChangelogById(ctx.params.id);
    if (entry) {
        return ctx.sendJson(entry);
    } else {
        return ctx.sendJson({ error: "Changelog entry not found" }, {status: 404});
    }
});

app.post("/api/changelog", async (ctx) => {
    try {
        const { author, date, heading, description }: ChangelogRequestBody = await ctx.req.json();
        const result = await insertChangelog(author, date, heading, description);
        return ctx.sendJson({result}, {status: 200});
    } catch (err) {
        let errorMessage = "An error occurred";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return ctx.sendJson({ error: errorMessage }, {status: 500});
    }
});

console.log("Server running on http://localhost:5000");
app.listen({port: 5000});
