import React from "react";
import { Route } from "react-router-dom";
import { YogaPoseProvider } from "./knowYourYogaPoses/YogaPoseProvider";
import { YogaPoseList } from "./knowYourYogaPoses/YogaPoseList";
import { YogaPoseDetails } from "./knowYourYogaPoses/YogaPoseDetail";
import { YogaSequenceList } from "./myYogaSequences/YogaSequenceList";
import { YogaSequenceProvider } from "./myYogaSequences/YogaSequenceProvider";
import { YogaSequenceForm } from "./myYogaSequences/YogaSequenceForm";
import { DailyYogaProvider } from "./dailyYogaPractices/DailyYogaProvider";
import { DailyYogaList } from "./dailyYogaPractices/DailyYogaList";
import { DailyYogaDetail } from "./dailyYogaPractices/DailyYogaDetail";
import { TherapeuticYoga } from "./therapeuticYogaPractices/TherapeuticYoga";
import { TherapeuticYogaProvider } from "./therapeuticYogaPractices/TherapeuticYogaProvider";
import { TherapeuticYogaList } from "./therapeuticYogaPractices/TherapeuticYogaList";
import { TherapeuticYogaDetail } from "./therapeuticYogaPractices/TherapeuticYogaDetail";
import { KnowYourMyYogaProvider } from "./knowYourMyYoga/KnowYourMyYogaProvider";
import {MyYogaDashboardList} from "./knowYourMyYoga/KnowYourMyYogaList"

export const ApplicationViews = (props) => {
  return (
    <>
      <YogaPoseProvider>
        <Route exact path="/">
          <YogaPoseList />
        </Route>
        <Route
          path="/yogaPoses/:yogaPoseId(\d+)"
          render={(props) => {
            // console.log("props", props)
            return <YogaPoseDetails {...props} />;
          }}
        />
      </YogaPoseProvider>

      <YogaPoseProvider>
        <DailyYogaProvider>
          <Route path="/daily-yoga">
            <DailyYogaList />
          </Route>
          <Route
            path="/daily-yoga/:dailyYogaId(\d+)"
            render={(props) => {
              // console.log("props", props)
              return <DailyYogaDetail {...props} />;
            }}
          />
        </DailyYogaProvider>
      </YogaPoseProvider>

      <TherapeuticYogaProvider>
        <Route path="/therapeutic-yoga">
          <TherapeuticYogaList />
        </Route>
        <Route
          path="/therapeutic-yoga/:therapeuticYogaId(\d+)"
          render={(props) => {
            // console.log("props", props)
            return <TherapeuticYogaDetail {...props} />;
          }}
        />
      </TherapeuticYogaProvider>

    <KnowYourMyYogaProvider>
      <DailyYogaProvider>
        <YogaPoseProvider>
          <YogaSequenceProvider>
            <Route path="/yoga-sequence">
              <YogaSequenceList {...props} />
            </Route>
            <Route
              path="/yoga-sequence/create"
              render={(props) => <YogaSequenceForm {...props} />}
            />
          </YogaSequenceProvider>
        </YogaPoseProvider>
      </DailyYogaProvider>
    </KnowYourMyYogaProvider>

  <YogaPoseProvider>
    <YogaSequenceProvider>
      <KnowYourMyYogaProvider>
      <Route path="/yoga-dashboard">
       
        <MyYogaDashboardList {...props} />
        </Route>
      </KnowYourMyYogaProvider>
    </YogaSequenceProvider>
  </YogaPoseProvider>

    </>
  );
};
