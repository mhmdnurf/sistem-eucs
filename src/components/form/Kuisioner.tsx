"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";

interface Kuisioner {
  statements: any;
}

export default function Kuisioner({ statements }: Kuisioner) {
  return (
    <>
      <div className="flex flex-col bg-slate-50 p-8 rounded-lg shadow border-4 border-slate-400 mb-8">
        <div className="">
          {statements.map(
            (
              statement: {
                statement:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <ul key={index} className="">
                <li key={index} className="font-semibold text-lg">
                  {statement.statement}
                </li>
                <div className="flex my-4">
                  <input
                    type="radio"
                    name="sts"
                    id="sts"
                    value={1}
                    className="mr-2"
                  />
                  <label htmlFor="sts">Sangat Tidak Setuju</label>
                </div>
                <div className="flex my-4">
                  <input
                    type="radio"
                    name="ts"
                    id="ts"
                    value={2}
                    className="mr-2"
                  />
                  <label htmlFor="ts">Tidak Setuju</label>
                </div>
                <div className="flex my-4">
                  <input
                    type="radio"
                    name="n"
                    id="n"
                    value={3}
                    className="mr-2"
                  />
                  <label htmlFor="n">Netral</label>
                </div>
                <div className="flex my-4">
                  <input
                    type="radio"
                    name="s"
                    id="s"
                    value={4}
                    className="mr-2"
                  />
                  <label htmlFor="s">Setuju</label>
                </div>
                <div className="flex my-4">
                  <input
                    type="radio"
                    name="st"
                    id="st"
                    value={5}
                    className="mr-2"
                  />
                  <label htmlFor="sts">Sangat Setuju</label>
                </div>
              </ul>
            )
          )}
        </div>
      </div>
    </>
  );
}
