import {
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{" "}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
