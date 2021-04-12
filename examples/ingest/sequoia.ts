/**
 * This is an example Data Ingestion plugin that applies some custom
 * logic to the crawled page to extract a company description and
 * twitter handle from Sequoia's company pages.
 */
import { IngestURLEvent } from "https://deno.land/x/yext_plugins/ingest/url.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

addEventListener(IngestURLEvent.type, function(evt: any) {
  const event = evt as IngestURLEvent;
  const { url, html } = event;
  const $ = cheerio.load(html);

  // Extract twitter handle from the social links.
  let twitterHref =
    $("a.social-link").filter(function (this: typeof cheerio, i, el) {
      const href: string = $(this).attr("href") || "";
      return href.includes("twitter.com");
    }).first().attr("href") || "";
  if (twitterHref.startsWith("https://twitter.com/")) {
    twitterHref = twitterHref.substring("https://twitter.com/".length);
  }

  // Get the complete description.
  let descriptionParagraphs: string[] = [];
  $(".company-holder._body-copy p").each(
    function (this: typeof cheerio, i, el) {
      descriptionParagraphs.push($(this).text().trim());
    },
  );
  const fullDescription = descriptionParagraphs.join("\n\n");

  event.respondWith([
    {
      url: url,
      text: fullDescription,
      twitterHandle: twitterHref,
    },
  ]);
});
