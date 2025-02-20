import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function Eventpicture() {
  // const data = [
  //   "https://media.licdn.com/dms/image/v2/D4D22AQE4bkGosGIJTw/feedshare-shrink_800/B4DZS9WW_OGcAo-/0/1738343545230?e=2147483647&v=beta&t=IG_DSOTQW7Klju5qn2GNpx64KWvzkU1QLmQm7tvWVyg",
  //   "https://media.licdn.com/dms/image/v2/D5622AQFXk4EM_5eqhQ/feedshare-shrink_800/B56ZRPZRsbGsAg-/0/1736498815054?e=2147483647&v=beta&t=hj0PYhP8NEOtG15PrC7bZtcU13v-f4pkZSRFy0hxAqE",
  //   "https://media.licdn.com/dms/image/v2/D5622AQEHQiDAUU_tHg/feedshare-shrink_800/B56ZTCEGdEHQAg-/0/1738422643959?e=2147483647&v=beta&t=S7zmE48266wuNbF_wQBkp7EWpDSQ-Bh4isCQ6W2Srho",
  // ];
  const data_ = [
    {
      imageLink:
        "https://media.licdn.com/dms/image/v2/D5622AQFZ7fphRmgszg/feedshare-shrink_800/B56ZT_2jK9HEAo-/0/1739459279641?e=1743033600&v=beta&t=aFL_tHIRjNAGjvj3ByImnwGQkRDY219kTKNZfpWH7As",
      linkedinLink:
        "https://www.linkedin.com/posts/analytic-brains-technologies-private-limited_happyvalentinesday-buildingconnections-innovation-activity-7295962453052379136-MiJz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO_9QwBb9kSl_wYVSFidtMe7UZqJzd3Le0",
    },
    {
      imageLink:
        "https://media.licdn.com/dms/image/v2/D5622AQGbiSxk52lSPg/feedshare-shrink_800/B56ZSdloMXHQAg-/0/1737810675372?e=1743033600&v=beta&t=YoaRlYNF16WAG4uYuFJfcbwFInwag9KFSTyxzQcdQOM",
      linkedinLink:
        "https://www.linkedin.com/posts/analytic-brains-technologies-private-limited_republicday-analyticbrains-proudtobeindian-activity-7289077098181275648-iI1K?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO_9QwBb9kSl_wYVSFidtMe7UZqJzd3Le0",
    },
    {
      linkedinLink:
        "https://www.linkedin.com/posts/analytic-brains-technologies-private-limited_workanniversary-4yearsstrong-techexcellence-activity-7291976196156715008-sSLG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO_9QwBb9kSl_wYVSFidtMe7UZqJzd3Le0",
      imageLink:
        "https://media.licdn.com/dms/image/v2/D4D22AQE4bkGosGIJTw/feedshare-shrink_800/B4DZS9WW_OGcAo-/0/1738343545230?e=2147483647&v=beta&t=IG_DSOTQW7Klju5qn2GNpx64KWvzkU1QLmQm7tvWVyg",
    },
  ];
  return (
    <div className="flex flex-col">
      <p className="text-2xl mb-3">Events</p>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {data_.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-4xl font-semibold">{index + 1}</span>
                     */}
                    <Link
                      href={item.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.imageLink} alt={`image-${index}`} />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
