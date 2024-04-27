"use client";
import React from "react";
import DataForm from "./Search/DataForm";

export type TPersonData = {
  summary: string;
  interesting_facts: string[];
  topics_of_interest: string;
  ice_breakers: string[];
  profile_picture: string;
  full_name: string;
};

export default function Search() {
  const [data, setData] = React.useState<TPersonData | undefined>(undefined);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-20">
        {data == undefined ? (
          <DataForm
            setData={(data) => {
              setData(data);
            }}
          />
        ) : (
          <div className="mx-auto lg:w-4/6">
            <div className="flex flex-col">
              <div className="gap-10 text-center sm:flex sm:px-8">
                <DataForm
                  className="sm:order-1"
                  setData={(data) => {
                    setData(data);
                  }}
                />
                <div className="mb-8 border-gray-200 sm:border-r">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mr-10 sm:h-32 sm:w-32">
                    <img
                      src={
                        false ? `${data?.profile_picture}` : "https://cdn-icons-png.flaticon.com/512/8483/8483624.png"
                      }
                      alt="external-interest-emotions-and-emotional-intelligence-flaticons-lineal-color-flat-icons"
                      className="aspect-square h-12 w-12 object-cover sm:h-20 sm:w-20"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-start">
                    <h2 className="title-font mb-4 mt-4 text-lg font-medium text-gray-900">
                      {data?.full_name}
                      <div className="mb-4 mt-2 h-1 w-full rounded bg-indigo-500" />
                    </h2>
                    <p className="pr-5 text-base">{data?.summary}</p>
                  </div>
                </div>
              </div>
              <section className="body-font text-gray-600">
                <div className="container mx-auto border-t border-gray-200 px-5 pt-4 sm:py-8">
                  <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row">
                    <div className="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mr-10 sm:h-32 sm:w-32">
                      <img
                        src="https://img.icons8.com/?size=512&id=sMELDDj7ZcpJ&format=png"
                        alt="external-interest-emotions-and-emotional-intelligence-flaticons-lineal-color-flat-icons"
                        className="aspect-square h-12 w-12 object-cover sm:h-20 sm:w-20"
                      />
                    </div>
                    <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
                      <h2 className="title-font mb-2 text-lg font-medium text-gray-900">Topics of Interest</h2>
                      <p className="mb-2 text-base leading-relaxed">{data?.topics_of_interest}</p>
                    </div>
                  </div>
                  <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row">
                    <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
                      <h2 className="title-font mb-2 text-lg font-medium text-gray-900">Interesting Facts</h2>
                      {data?.interesting_facts.map((fact, index) => (
                        <p key={index} className="mb-2 text-base leading-relaxed">
                          • {fact}
                        </p>
                      ))}
                    </div>
                    <div className="order-first inline-flex h-20 w-20 flex-shrink-0 flex-row-reverse items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:order-none sm:ml-10 sm:h-32 sm:w-32">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5167/5167414.png"
                        alt="external-interest-emotions-and-emotional-intelligence-flaticons-lineal-color-flat-icons"
                        className="aspect-square h-12 w-12 object-cover sm:h-20 sm:w-20"
                      />
                    </div>
                  </div>
                  <div className="mx-auto flex flex-col items-center sm:flex-row">
                    <div className="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mr-10 sm:h-32 sm:w-32">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11531/11531272.png"
                        alt="external-interest-emotions-and-emotional-intelligence-flaticons-lineal-color-flat-icons"
                        className="aspect-square h-12 w-12 object-cover sm:h-20 sm:w-20"
                      />
                    </div>
                    <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
                      <h2 className="title-font mb-2 text-lg font-medium text-gray-900">Ice Breakers</h2>
                      {data?.ice_breakers.map((breaker, index) => (
                        <p key={index} className="mb-2 text-base leading-relaxed">
                          • {breaker}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
