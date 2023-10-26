-- CreateTable
CREATE TABLE "Ong" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ongId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "isAdopted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ong_email_key" ON "Ong"("email");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
