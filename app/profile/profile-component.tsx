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
import { ListofVideoGames } from "@/components/listof-video-games";

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
        <ListofVideoGames />
        <ProfileButton />
      </IonContent>
    </IonPage>
  );
}
