import Bao from "baojs";
import { getChangelogs, getChangelogById, insertChangelog } from './controllers/controller';
const app = new Bao();
interface ChangelogRequestBody {
    readmePath: string;
    version: string;
    date: string;
    author: string;
    // Include any other relevant fields according to your current changelog structure
}


app.get("/", (ctx) => {
    let sendMessage = 'Welcome to the Changelog Application!';
    return ctx.sendJson({ message: sendMessage }, { status: 200 });
});

app.get("/changelog", async (ctx) => {
    try {
        const changelog = await getChangelogs();
        return ctx.sendJson({ changelog }, { status: 200 });
    } catch (err) {
        let errorMessage = "Failed to fetch changelogs";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return ctx.sendJson({ error: errorMessage }, { status: 500 });
    }
});

app.get("/changelog/:id", async (ctx) => {
    try {
        const entry = await getChangelogById(ctx.params.id);
        if (entry) {
            return ctx.sendJson({ entry }, { status: 200 });
        } else {
            return ctx.sendJson({ error: "Changelog entry not found" }, { status: 404 });
        }
    } catch (err) {
        let errorMessage = "Failed to fetch changelog by ID";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return ctx.sendJson({ error: errorMessage }, { status: 500 });
    }
});

app.post("/api/changelog", async (ctx) => {
    try {
        const { author, date, version, readmePath }: ChangelogRequestBody = await ctx.req.json();
        const result = await insertChangelog(readmePath);
        return ctx.sendJson({ result }, { status: 200 });
    } catch (err) {
        let errorMessage = "Failed to insert changelog";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return ctx.sendJson({ error: errorMessage }, { status: 500 });
    }
});

console.log("Server running on http://localhost:5000");
app.listen({ port: 5000 });
