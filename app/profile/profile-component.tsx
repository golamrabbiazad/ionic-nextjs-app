"use client";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { ProfileButton } from "@/components/profile-button";
import Link from "next/link";

setupIonicReact();

export function ProfileComponent() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <Link href="/">Home</Link>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileButton />
      </IonContent>
    </IonPage>
  );
}
