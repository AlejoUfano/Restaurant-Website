import { useState } from "react";
import {
  XMarkIcon,
  UserIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { NavigationType } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

type Props = {
  isTopOfPage: boolean;
};

const navigation: Array<NavigationType> = [
  { name: "Home", href: "#", current: true },
  { name: "Top", href: "#", current: false },
  { name: "Booking", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Menu", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const HeaderBackground = isTopOfPage ? "" : "bg-cream drop-shadow";
  const iconColor = isTopOfPage ? "text-white" : "text-main-red";

  return (
    <nav>
      <div
        className={`${HeaderBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full`}>
            {/* LEFT SIDE */}
            {!isAboveMediumScreens && (
              <div className={`${flexBetween}`}>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      onClick={() =>
                        isMenuToggled && setIsMenuToggled(!isMenuToggled)
                      }
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="rounded-full bg-white p-1">
                        <UserIcon className="flex h-6 w-6 text-main-blue" />
                        <div className="absolute top-0 left-6 h-3 w-3 rounded-full bg-main-green"></div>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}
            <h1
              className={`${
                isAboveMediumScreens ? "text-7xl" : "text-4xl"
              } font-bold text-main-red`}
            >
              expice
            </h1>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-3/5`}>
                <div className={`${flexBetween} text-md`}>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-main-blue-light"
                          : "text-main-blue hover:text-main-blue-light",
                        "rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <div className="rounded-full bg-white p-1">
                          <UserIcon className="flex h-6 w-6 text-main-blue" />
                          <div className="absolute top-0 left-6 h-3 w-3 rounded-full bg-main-green"></div>
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            ) : (
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3BottomRightIcon className={`h-6 w-6 ${iconColor}`} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-main-red drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-cream" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="text-2x1 ml-[33%] flex flex-col gap-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? " text-main-blue-light"
                    : "text-main-blue hover:text-main-blue-light",
                  "rounded-md px-3 py-2 text-base font-semibold"
                )}
                aria-current={item.current ? "page" : undefined}
                onClick={() =>
                  isMenuToggled && setIsMenuToggled(!isMenuToggled)
                }
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
