-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);
