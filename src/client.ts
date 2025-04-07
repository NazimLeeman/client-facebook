import { type Client, elizaLogger, type IAgentRuntime, type Plugin } from "@elizaos/core";
import { ClientBase } from "./base.ts";
import { validateFacebookConfig, type FacebookConfig } from "./environment.ts";
import { FacebookPostClient } from "./post.ts";

class FacebookManager {
    client: ClientBase;
    post: FacebookPostClient;
    constructor(runtime: IAgentRuntime, facebookConfig: FacebookConfig) {
        this.client = new ClientBase(runtime, facebookConfig);
        this.post = new FacebookPostClient(this.client, runtime);
    }
}