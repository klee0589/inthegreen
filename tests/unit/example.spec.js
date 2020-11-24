// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import ScoreBoardSlot from "@/components/ScoreBoardSlot.vue";

// The component to test
const MessageComponent = {
  ScoreBoardSlot,
  props: ["game"]
};

test("displays message", async () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = await mount(MessageComponent, {
    propsData: {
      game: {
        competitions: [
          {
            competitors: [
              {
                id: "379",
                uid: "s:600~t:379",
                type: "team",
                order: 0,
                homeAway: "home",
                winner: true,
                team: {
                  id: "379",
                  uid: "s:600~t:379",
                  location: "Burnley",
                  name: "Burnley",
                  abbreviation: "BUR",
                  displayName: "Burnley",
                  shortDisplayName: "Burnley",
                  color: "53162F",
                  alternateColor: "231F20",
                  isActive: true,
                  venue: { id: "197" },
                  logo: "https://a.espncdn.com/i/teamlogos/soccer/500/379.png"
                },
                score: "1",
                form: "WDLLD",
                records: [
                  {
                    name: "All Splits",
                    abbreviation: "Total",
                    type: "total",
                    summary: "1-2-5"
                  }
                ]
              },
              {
                id: "384",
                uid: "s:600~t:384",
                type: "team",
                order: 1,
                homeAway: "away",
                winner: false,
                team: {
                  id: "384",
                  uid: "s:600~t:384",
                  location: "Crystal Palace",
                  name: "Crystal Palace",
                  abbreviation: "CRY",
                  displayName: "Crystal Palace",
                  shortDisplayName: "C Palace",
                  color: "0202fb",
                  alternateColor: "f42727",
                  isActive: true,
                  venue: { id: "135" },
                  links: [
                    {
                      rel: ["clubhouse", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/club/_/id/384/crystal-palace",
                      text: "Clubhouse",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["stats", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/team/stats/_/id/384/crystal-palace",
                      text: "Stats",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["schedule", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/team/fixtures/_/id/384/crystal-palace",
                      text: "Fixtures",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["scores", "sportscenter", "app", "team"],
                      href:
                        "sportscenter://x-callback-url/showClubhouse?uid=s:600~t:384&section=scores",
                      text: "Scores",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["results", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/team/results/_/id/384/crystal-palace",
                      text: "Results",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["standings", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/standings/_/league/eng.1",
                      text: "Standings",
                      isExternal: false,
                      isPremium: false
                    },
                    {
                      rel: ["squad", "desktop", "team"],
                      href:
                        "http://www.espn.com/soccer/team/squad/_/id/384/crystal-palace",
                      text: "Squad",
                      isExternal: false,
                      isPremium: false
                    }
                  ],
                  logo: "https://a.espncdn.com/i/teamlogos/soccer/500/384.png"
                }
              }
            ],
            status: {
              clock: 5400,
              displayClock: "90'+7'",
              period: 2,
              type: {
                id: "28",
                name: "STATUS_FULL_TIME",
                state: "post",
                completed: true,
                description: "Full Time",
                detail: "FT",
                shortDetail: "FT"
              }
            },
            startDate: "2020-11-23T17:30Z",
            headlines: [
              {
                description:
                  "Burnley secured their first win of the Premier League season as Chris Wood's eighth minute goal was enough to earn a 1-0 victory over Crystal Palace",
                type: "Report",
                shortLinkText:
                  "Burnley beat Crystal Palace for first win of season"
              }
            ]
          }
        ]
      }
    }
  });

  const div = wrapper.find("div");
  expect(div.element).toBe(true);

  const label = wrapper.find("span.label");

  expect(label).toContain("Full Time");
});
