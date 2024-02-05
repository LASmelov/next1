/*
  Warnings:

  - You are about to drop the column `adress` on the `rooms` table. All the data in the column will be lost.
  - Added the required column `addres` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rooms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "peopleMax" INTEGER NOT NULL,
    "addres" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_rooms" ("description", "id", "name", "peopleMax", "price") SELECT "description", "id", "name", "peopleMax", "price" FROM "rooms";
DROP TABLE "rooms";
ALTER TABLE "new_rooms" RENAME TO "rooms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
