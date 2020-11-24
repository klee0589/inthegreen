import { mount } from "@vue/test-utils";
import ScoreBoardSlot from "@/components/ScoreBoardSlot.vue";

test("component is showing", async () => {
  const wrapper = mount(ScoreBoardSlot);
  await wrapper.setProps({
    game: {
      id: "401220335",
      uid: "s:20~l:28~e:401220335",
      date: "2020-11-24T01:15Z",
      name: "Los Angeles Rams at Tampa Bay Buccaneers",
      shortName: "LAR @ TB",
      season: { year: 2020, type: 2 },
      competitions: [
        {
          id: "401220335",
          uid: "s:20~l:28~e:401220335~c:401220335",
          date: "2020-11-24T01:15Z",
          attendance: 0,
          type: { id: "1", abbreviation: "STD" },
          timeValid: true,
          neutralSite: false,
          conferenceCompetition: false,
          recent: false,
          venue: {
            id: "3886",
            fullName: "Raymond James Stadium",
            address: { city: "Tampa", state: "FL" },
            capacity: 65618,
            indoor: false,
          },
          competitors: [
            {
              id: "27",
              uid: "s:20~l:28~t:27",
              type: "team",
              order: 0,
              homeAway: "home",
              team: {
                id: "27",
                uid: "s:20~l:28~t:27",
                location: "Tampa Bay",
                name: "Buccaneers",
                abbreviation: "TB",
                displayName: "Tampa Bay Buccaneers",
                shortDisplayName: "Buccaneers",
                color: "A80D08",
                alternateColor: "34302b",
                isActive: true,
                venue: { id: "3886" },
                links: [
                  {
                    rel: ["clubhouse", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/_/name/tb/tampa-bay-buccaneers",
                    text: "Clubhouse",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["roster", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/roster/_/name/tb/tampa-bay-buccaneers",
                    text: "Roster",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["stats", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/stats/_/name/tb/tampa-bay-buccaneers",
                    text: "Statistics",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["schedule", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/schedule/_/name/tb",
                    text: "Schedule",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["photos", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/photos/_/name/tb",
                    text: "photos",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["scores", "sportscenter", "app", "team"],
                    href:
                      "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:28~t:27&section=scores",
                    text: "Scores",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["draftpicks", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/draft/teams/_/name/tb/tampa-bay-buccaneers",
                    text: "Draft Picks",
                    isExternal: false,
                    isPremium: true,
                  },
                  {
                    rel: ["transactions", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/transactions/_/name/tb",
                    text: "Transactions",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["injuries", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/injuries/_/name/tb",
                    text: "Injuries",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["depthchart", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/depth/_/name/tb",
                    text: "Depth Chart",
                    isExternal: false,
                    isPremium: false,
                  },
                ],
                logo:
                  "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/tb.png",
              },
              score: "0",
              linescores: [{ value: 0 }],
              statistics: [],
              records: [
                {
                  name: "All Splits",
                  abbreviation: "Any",
                  type: "total",
                  summary: "7-3",
                },
                { name: "Home", type: "home", summary: "3-1" },
                { name: "Road", type: "road", summary: "4-2" },
              ],
              leaders: [
                {
                  name: "passingLeader",
                  displayName: "Passing Leader",
                  shortDisplayName: "PASS",
                  abbreviation: "PYDS",
                  leaders: [
                    {
                      displayValue: "254-385, 2739 YDS, 23 TD, 7 INT",
                      value: 2739,
                      athlete: {
                        id: "2330",
                        fullName: "Tom Brady",
                        displayName: "Tom Brady",
                        shortName: "T. Brady",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/2330/tom-brady",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/2330/tom-brady",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
                        jersey: "12",
                        position: { abbreviation: "QB" },
                        team: { id: "27" },
                        active: true,
                      },
                      team: { id: "27" },
                    },
                  ],
                },
                {
                  name: "rushingLeader",
                  displayName: "Rushing Leader",
                  shortDisplayName: "RUSH",
                  abbreviation: "RYDS",
                  leaders: [
                    {
                      displayValue: "143 CAR, 730 YDS, 5 TD",
                      value: 730,
                      athlete: {
                        id: "3912550",
                        fullName: "Ronald Jones II",
                        displayName: "Ronald Jones II",
                        shortName: "R. Jones II",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/3912550/ronald-jones-ii",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/3912550/ronald-jones-ii",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
                        jersey: "27",
                        position: { abbreviation: "RB" },
                        team: { id: "27" },
                        active: true,
                      },
                      team: { id: "27" },
                    },
                  ],
                },
                {
                  name: "receivingLeader",
                  displayName: "Receiving Leader",
                  shortDisplayName: "REC",
                  abbreviation: "RECYDS",
                  leaders: [
                    {
                      displayValue: "40 REC, 514 YDS, 8 TD",
                      value: 514,
                      athlete: {
                        id: "16737",
                        fullName: "Mike Evans",
                        displayName: "Mike Evans",
                        shortName: "M. Evans",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/16737/mike-evans",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/16737/mike-evans",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
                        jersey: "13",
                        position: { abbreviation: "WR" },
                        team: { id: "27" },
                        active: true,
                      },
                      team: { id: "27" },
                    },
                  ],
                },
              ],
            },
            {
              id: "14",
              uid: "s:20~l:28~t:14",
              type: "team",
              order: 1,
              homeAway: "away",
              team: {
                id: "14",
                uid: "s:20~l:28~t:14",
                location: "Los Angeles",
                name: "Rams",
                abbreviation: "LAR",
                displayName: "Los Angeles Rams",
                shortDisplayName: "Rams",
                color: "00295B",
                alternateColor: "b3995d",
                isActive: true,
                venue: { id: "477" },
                links: [
                  {
                    rel: ["clubhouse", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/_/name/lar/los-angeles-rams",
                    text: "Clubhouse",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["roster", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/roster/_/name/lar/los-angeles-rams",
                    text: "Roster",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["stats", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/stats/_/name/lar/los-angeles-rams",
                    text: "Statistics",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["schedule", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/schedule/_/name/lar",
                    text: "Schedule",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["photos", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/photos/_/name/lar",
                    text: "photos",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["scores", "sportscenter", "app", "team"],
                    href:
                      "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:28~t:14&section=scores",
                    text: "Scores",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["draftpicks", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/draft/teams/_/name/lar/los-angeles-rams",
                    text: "Draft Picks",
                    isExternal: false,
                    isPremium: true,
                  },
                  {
                    rel: ["transactions", "desktop", "team"],
                    href:
                      "http://www.espn.com/nfl/team/transactions/_/name/lar",
                    text: "Transactions",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["injuries", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/injuries/_/name/lar",
                    text: "Injuries",
                    isExternal: false,
                    isPremium: false,
                  },
                  {
                    rel: ["depthchart", "desktop", "team"],
                    href: "http://www.espn.com/nfl/team/depth/_/name/lar",
                    text: "Depth Chart",
                    isExternal: false,
                    isPremium: false,
                  },
                ],
                logo:
                  "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lar.png",
              },
              score: "0",
              linescores: [{ value: 0 }],
              statistics: [],
              records: [
                {
                  name: "All Splits",
                  abbreviation: "Any",
                  type: "total",
                  summary: "6-3",
                },
                { name: "Home", type: "home", summary: "4-0" },
                { name: "Road", type: "road", summary: "2-3" },
              ],
              leaders: [
                {
                  name: "passingLeader",
                  displayName: "Passing Leader",
                  shortDisplayName: "PASS",
                  abbreviation: "PYDS",
                  leaders: [
                    {
                      displayValue: "213-321, 2447 YDS, 13 TD, 6 INT",
                      value: 2447,
                      athlete: {
                        id: "3046779",
                        fullName: "Jared Goff",
                        displayName: "Jared Goff",
                        shortName: "J. Goff",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/3046779/jared-goff",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/3046779/jared-goff",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
                        jersey: "16",
                        position: { abbreviation: "QB" },
                        team: { id: "14" },
                        active: true,
                      },
                      team: { id: "14" },
                    },
                  ],
                },
                {
                  name: "rushingLeader",
                  displayName: "Rushing Leader",
                  shortDisplayName: "RUSH",
                  abbreviation: "RYDS",
                  leaders: [
                    {
                      displayValue: "102 CAR, 486 YDS, 4 TD",
                      value: 486,
                      athlete: {
                        id: "4039359",
                        fullName: "Darrell Henderson Jr.",
                        displayName: "Darrell Henderson Jr.",
                        shortName: "D. Henderson Jr.",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/4039359/darrell-henderson-jr",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/4039359/darrell-henderson-jr",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
                        jersey: "27",
                        position: { abbreviation: "RB" },
                        team: { id: "14" },
                        active: true,
                      },
                      team: { id: "14" },
                    },
                  ],
                },
                {
                  name: "receivingLeader",
                  displayName: "Receiving Leader",
                  shortDisplayName: "REC",
                  abbreviation: "RECYDS",
                  leaders: [
                    {
                      displayValue: "53 REC, 577 YDS, 2 TD",
                      value: 577,
                      athlete: {
                        id: "2977187",
                        fullName: "Cooper Kupp",
                        displayName: "Cooper Kupp",
                        shortName: "C. Kupp",
                        links: [
                          {
                            rel: ["playercard", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["stats", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/stats/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["splits", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/splits/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["gamelog", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/gamelog/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["news", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/news/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["bio", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/bio/_/id/2977187/cooper-kupp",
                          },
                          {
                            rel: ["overview", "desktop", "athlete"],
                            href:
                              "http://www.espn.com/nfl/player/_/id/2977187/cooper-kupp",
                          },
                        ],
                        headshot:
                          "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
                        jersey: "10",
                        position: { abbreviation: "WR" },
                        team: { id: "14" },
                        active: true,
                      },
                      team: { id: "14" },
                    },
                  ],
                },
              ],
            },
          ],
          notes: [],
          status: {
            clock: 900,
            displayClock: "15:00",
            period: 1,
            type: {
              id: "1",
              name: "STATUS_SCHEDULED",
              state: "pre",
              completed: false,
              description: "Scheduled",
              detail: "Mon, November 23rd at 8:15 PM EST",
              shortDetail: "11/23 - 8:15 PM EST",
            },
          },
          broadcasts: [{ market: "national", names: ["ESPN"] }],
          leaders: [
            {
              name: "passingYards",
              displayName: "Passing Leader",
              shortDisplayName: "PASS",
              abbreviation: "PYDS",
              leaders: [
                {
                  displayValue: "254-385, 2739 YDS, 23 TD, 7 INT",
                  value: 2739,
                  athlete: {
                    id: "2330",
                    fullName: "Tom Brady",
                    displayName: "Tom Brady",
                    shortName: "T. Brady",
                    links: [
                      {
                        rel: ["playercard", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["stats", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/stats/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["splits", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/splits/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["gamelog", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/gamelog/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["news", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/news/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["bio", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/bio/_/id/2330/tom-brady",
                      },
                      {
                        rel: ["overview", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/2330/tom-brady",
                      },
                    ],
                    headshot:
                      "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
                    jersey: "12",
                    position: { abbreviation: "QB" },
                    team: { id: "27" },
                    active: true,
                  },
                  team: { id: "27" },
                },
              ],
            },
            {
              name: "rushingYards",
              displayName: "Rushing Leader",
              shortDisplayName: "RUSH",
              abbreviation: "RYDS",
              leaders: [
                {
                  displayValue: "143 CAR, 730 YDS, 5 TD",
                  value: 730,
                  athlete: {
                    id: "3912550",
                    fullName: "Ronald Jones II",
                    displayName: "Ronald Jones II",
                    shortName: "R. Jones II",
                    links: [
                      {
                        rel: ["playercard", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["stats", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/stats/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["splits", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/splits/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["gamelog", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/gamelog/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["news", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/news/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["bio", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/bio/_/id/3912550/ronald-jones-ii",
                      },
                      {
                        rel: ["overview", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/3912550/ronald-jones-ii",
                      },
                    ],
                    headshot:
                      "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
                    jersey: "27",
                    position: { abbreviation: "RB" },
                    team: { id: "27" },
                    active: true,
                  },
                  team: { id: "27" },
                },
              ],
            },
            {
              name: "receivingYards",
              displayName: "Receiving Leader",
              shortDisplayName: "REC",
              abbreviation: "RECYDS",
              leaders: [
                {
                  displayValue: "53 REC, 577 YDS, 2 TD",
                  value: 577,
                  athlete: {
                    id: "2977187",
                    fullName: "Cooper Kupp",
                    displayName: "Cooper Kupp",
                    shortName: "C. Kupp",
                    links: [
                      {
                        rel: ["playercard", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["stats", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/stats/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["splits", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/splits/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["gamelog", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/gamelog/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["news", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/news/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["bio", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/bio/_/id/2977187/cooper-kupp",
                      },
                      {
                        rel: ["overview", "desktop", "athlete"],
                        href:
                          "http://www.espn.com/nfl/player/_/id/2977187/cooper-kupp",
                      },
                    ],
                    headshot:
                      "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
                    jersey: "10",
                    position: { abbreviation: "WR" },
                    team: { id: "14" },
                    active: true,
                  },
                  team: { id: "14" },
                },
              ],
            },
          ],
          tickets: [
            {
              summary: "Tickets as low as $134",
              numberAvailable: 93,
              links: [
                {
                  href:
                    "https://www.vividseats.com/nfl/tampa-bay-buccaneers-tickets/buccaneers-11-23-3525252.html?wsUser=717",
                },
                {
                  href:
                    "https://www.vividseats.com/venues/raymond-james-stadium-tickets.html?wsUser=717",
                },
              ],
            },
          ],
          startDate: "2020-11-24T01:15Z",
          geoBroadcasts: [
            {
              type: { id: "1", shortName: "TV" },
              market: { id: "1", type: "National" },
              media: { shortName: "ESPN" },
              lang: "en",
              region: "us",
            },
          ],
          odds: [
            {
              provider: { id: "38", name: "Caesars", priority: 1 },
              details: "TB -4.5",
              overUnder: 48,
            },
          ],
        },
      ],
      links: [
        {
          language: "en-US",
          rel: ["summary", "desktop", "event"],
          href: "http://www.espn.com/nfl/game/_/gameId/401220335",
          text: "Gamecast",
          shortText: "Gamecast",
          isExternal: false,
          isPremium: false,
        },
      ],
      weather: {
        displayValue: "Mostly cloudy",
        temperature: 71,
        conditionId: "38",
      },
      status: {
        clock: 900,
        displayClock: "15:00",
        period: 1,
        type: {
          id: "1",
          name: "STATUS_SCHEDULED",
          state: "pre",
          completed: false,
          description: "Scheduled",
          detail: "Mon, November 23rd at 8:15 PM EST",
          shortDetail: "11/23 - 8:15 PM EST",
        },
      },
    },
  });
  expect(wrapper.is("#gameInfoContainer")).toBe(true);
});
