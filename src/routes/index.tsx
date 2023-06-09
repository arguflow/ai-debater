import {
  BiLogosGithub,
  BiLogosTwitch,
  BiLogosTwitter,
  BiLogosYoutube,
  BiRegularCheck,
} from "solid-icons/bi";
import { createEffect, createSignal } from "solid-js";
import { A, useSearchParams } from "solid-start";
import { Survey } from "~/components/Forms/Survey";
import ThemeModeController from "~/components/Navbar/ThemeModeController";
import { detectReferralToken } from "~/types/actix-api";

export default function Home() {
  const api_host: string = import.meta.env.VITE_API_HOST as unknown as string;

  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = createSignal<boolean>(false);

  detectReferralToken(searchParams.t);

  createEffect(() => {
    const abort_controller = new AbortController();

    void fetch(`${api_host}/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      signal: abort_controller.signal,
    }).then((response) => {
      if (!response.ok) {
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    });

    return () => {
      abort_controller.abort();
    };
  });

  return (
    <div class="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
      <div class="bg-gradient-radial-t from-magenta-400 p-4">
        <div class="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3 shadow-md dark:bg-neutral-800 lg:m-auto lg:max-w-5xl">
          <div class="flex items-center">
            <img
              class="w-10"
              src="/logo_transparent.svg"
              alt="Logo"
              elementtiming={""}
              fetchpriority={"high"}
            />
            <p class="text-lg">
              <span>Arguflow </span>
              <span class="text-magenta">AI</span>
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="hidden items-center gap-4 md:flex">
              <a class="hover:underline" href="https://vault.arguflow.com/">
                Evidence Vault
              </a>
              <a class="hover:underline" href="https://blog.arguflow.com/">
                Blog
              </a>
            </div>
            <ThemeModeController />
            <A
              class="rounded-lg bg-turquoise px-4 py-2 dark:text-neutral-900"
              href={isLogin() ? "/debate" : "/register"}
            >
              Start Debating
            </A>
          </div>
        </div>
        <div class="py-4" />
        <div class="flex flex-col items-center space-y-8">
          <p class="text-5xl md:text-6xl">
            <span>Arguflow </span>
            <span class="text-magenta">AI</span>
          </p>
          <p class="md:text-lg">Your personal AI debate coach.</p>
          <A
            class="rounded-lg bg-gradient-to-br from-cyan-900 to-turquoise px-4 py-2 text-white shadow-md"
            href={isLogin() ? "/debate" : "/register"}
          >
            Start Debating Now
          </A>
        </div>
      </div>
      <div class="py-4" />
      <div class="flex w-full justify-center">
        <div class="w-fit px-4">
          <iframe
            class="h-[169px] w-[300px] md:h-[315px] md:w-[560px]"
            src="https://www.youtube.com/embed/dI2TfkghWhA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
      <div class="py-6" />
      <div class="m-auto mx-auto flex max-w-5xl flex-col justify-center px-12 md:px-24">
        <section>
          <p id="product" class="text-magenta md:text-xl">
            Product
          </p>
          <div class="py-1" />
          <p class="text-2xl font-medium">The new artificial face of debate</p>
          <div class="py-2" />
          <p class="text-xs md:text-lg">
            Arguflow AI utilizes ChatGPT as a debate coach to provide users with
            real-time feedback on their responses during a debate, allowing
            users to choose any topic they wish to debate and providing
            flexibility and customization to fit their needs.
          </p>
        </section>
        <div class="py-6" />
        <p id="pricing" class="text-magenta md:text-xl">
          Pricing
        </p>
        <p class="mb-3 text-2xl">Affordable Plans</p>
        <div class="flex flex-col gap-4 md:flex-row">
          <div class="w-full space-y-4 rounded-md bg-neutral-50 p-6 shadow-xl dark:bg-neutral-800 dark:text-neutral-50">
            <div>
              <p class="md:text-2xl">Bronze</p>
              <p class="text-xs text-neutral-500 md:text-lg">
                Preview of functionality
              </p>
              <p>
                <span class="text-2xl font-semibold md:text-4xl">Free</span>
              </p>
            </div>
            <A href={isLogin() ? "/debate" : "/register"}>
              <div class="mb-2 w-full rounded-lg bg-fuchsia-500 py-2 text-center shadow-md dark:text-neutral-900 sm:mt-10">
                Get Started
              </div>
            </A>
            <div>
              <ul>
                <li class="flex items-center text-fuchsia-500">
                  <BiRegularCheck size={30} />
                  <p class="text-xs text-neutral-900 dark:text-neutral-50">
                    ChatGPT 3.5 Turbo
                  </p>
                </li>
                <li class="flex items-center text-fuchsia-500">
                  <BiRegularCheck size={30} />
                  <p class="text-xs text-neutral-900 dark:text-neutral-50">
                    Unlimited Topics and Messages
                  </p>
                </li>
                <li class="flex items-center text-fuchsia-500">
                  <BiRegularCheck size={30} />
                  <p class="text-xs text-neutral-900 dark:text-neutral-50">
                    Quality Feedback
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full space-y-4 rounded-md bg-neutral-50 p-6 shadow-xl dark:bg-neutral-800 dark:text-neutral-50">
            <div>
              <p class="md:text-2xl">Pro</p>
              <p class="text-xs text-neutral-500 md:text-lg">
                What features do you want most?
              </p>
              <p>
                <span class="text-2xl font-semibold md:text-4xl">?</span>
                <span class="text-neutral-500 md:text-2xl">/mo</span>
              </p>
            </div>
            <div>
              Want to add something not in the list?{" "}
              <a
                class="text-blue-500 underline"
                href="https://cal.com/nick-arguflow/30min"
              >
                Book a meeting
              </a>
              , email us at contact@arguflow.gg, or make a{" "}
              <a
                href="https://github.com/arguflow/ai-debater/issues"
                class="text-blue-500 underline"
              >
                github issue
              </a>{" "}
            </div>
            <Survey />
          </div>
        </div>
        <div class="py-6" />
        <p class="text-magenta md:text-xl">Features</p>
        <div class="py-1" />
        <p class="text-2xl font-medium md:text-4xl">Why choose Arguflow AI?</p>
        <div class="py-2 md:py-6" />
        <section class="flex flex-col md:flex-row md:gap-10">
          <img
            class="self-center md:w-2/4"
            src="/calendar.svg"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <div class="flex flex-col justify-center">
            <p class="text-2xl md:text-3xl">24/7 Availability</p>
            <div class="py-1" />
            <p class="text-xs md:text-lg">
              Practice your debating skills at your own pace and on your own
              schedule.
            </p>
          </div>
        </section>
        <div class="py-4 md:py-5" />
        <section class="flex flex-col md:flex-row-reverse md:items-center md:gap-10">
          <img
            class="self-center md:w-full"
            src="/feedback.svg"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <div>
            <p class="text-2xl md:text-3xl">Instant Feedback</p>
            <div class="py-1" />
            <p class="text-xs md:text-lg">
              Starting with your first response, ChatGPT will provide feedback
              in real-time, including your strengths and areas of improvement.
            </p>
          </div>
        </section>
        <div class="py-4 md:py-5" />
        <section class="flex flex-col md:flex-row md:items-center md:gap-10">
          <img
            class="self-center md:w-full"
            src="/money.svg"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <div>
            <p class="text-2xl md:text-3xl">Affordable Coaching</p>
            <div class="py-1" />
            <p class="text-xs md:text-lg">
              Compared to private debate coaching companies, we are much more
              accessible and affordable, making it an ideal solution for
              businesses, schools, and individuals looking to improve their
              debating skills.
            </p>
          </div>
        </section>
        <div class="py-6" />
        <p class="text-magenta md:text-xl">Partners</p>
        <div class="py-1" />
        <p class="text-2xl font-medium md:text-4xl">Collaboration is Key</p>
        <div class="py-2" />
        <p class="text-xs md:text-lg">
          We are proud to work with a variety of partners who share our
          commitment to improving critical thinking and communication skills
          through innovative technology.
        </p>
        <div class="py-2" />
        <div class="-ml-3 flex">
          <img
            src="/Q-partner.png"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <img
            src="/C-partner.png"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <img
            src="/Z-partner.png"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
        </div>
        <div class="py-6 md:py-16" />
        <div class="flex flex-col items-center space-y-2 text-center">
          <p class="text-2xl md:text-4xl">Ready to Start Debating?</p>
          <p class="text-xs md:text-lg">
            Begin your debate journey today with Arguflow AI, your personal
            debate coach.
          </p>
          <A
            class="rounded-lg bg-gradient-to-br from-[#235761] to-turquoise px-4 py-2 text-white shadow-md"
            href={isLogin() ? "/debate" : "/register"}
          >
            Sign Up
          </A>
        </div>
      </div>
      <footer class="mt-14 flex flex-col items-center bg-gradient-radial-b from-magenta pb-4 pt-20">
        <div class="flex items-center">
          <img
            class="w-14"
            src="/logo_transparent.svg"
            alt=""
            elementtiming={""}
            fetchpriority={"high"}
          />
          <p class="text-lg">
            <span>Arguflow </span>
            <span class="text-magenta">AI</span>
          </p>
        </div>
        <div class="flex w-full flex-col  items-center gap-2">
          <a href="#pricing">Pricing</a>
          <a href="mailto:contact@arguflow.gg">Contact</a>
        </div>
        <div class="py-2" />
        <div class="flex gap-3">
          <a href="https://twitter.com/arguflowai" target="_blank">
            <BiLogosTwitter size={30} />
          </a>
          <a href="https://twitch.tv/arguflow" target="_blank">
            <BiLogosTwitch size={30} />
          </a>
          <a href="https://www.youtube.com/@arguflow">
            <BiLogosYoutube size={30} />
          </a>
          <a
            href="https://github.com/orgs/arguflow/repositories"
            target="_blank"
          >
            <BiLogosGithub size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}
