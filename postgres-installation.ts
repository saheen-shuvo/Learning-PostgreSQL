// {
// # PostgreSQL Installation & Beekeeper Studio Setup (macOS)

// ## 1. Install PostgreSQL

// Install PostgreSQL using Homebrew.

//bash
// brew install postgresql@17
//

// ---

// ## 2. Start PostgreSQL Service

// Start PostgreSQL in the background.

//bash
// brew services start postgresql@17
//

// Verify it's running.

//bash
// brew services list
//

// Expected output:

//
// postgresql@17    started
//

// ---

// ## 3. Verify PostgreSQL Installation

// Check the installed version.

//bash
// psql --version

// Example:

// psql (PostgreSQL) 17.x

// ---

// ## 4. Connect to PostgreSQL

// Open the PostgreSQL shell.

//bash
// psql

// You should see:

//
// username=#
//

// Exit using:

//sql
// \q
//

// ---

// ## 5. List Available Roles (Users)

// Inside `psql`, run:

//sql
// \du
//

// Example:

//
// Role name
// ----------
// shuvo
//

// > **Note:** On macOS Homebrew installations, the default role is usually your macOS username, **not** `postgres`.

// ---

// ## 6. List Databases

// Inside `psql`, run:

//sql
// \l
//

// This displays all available databases.

// ---

// ## 7. Connect Using Beekeeper Studio

// Open **Beekeeper Studio** and create a new PostgreSQL connection.

// | Field            | Value                                   |
// | ---------------- | --------------------------------------- |
// | Connection Type  | Postgres                                |
// | Host             | localhost                               |
// | Port             | 5432                                    |
// | User             | Your macOS username (e.g., `shuvo`)     |
// | Password         | Leave blank (unless you've set one)     |
// | Default Database | postgres (or another existing database) |

// Click:

// 1. **Test**
// 2. **Connect**
// 3. **Save**

// ---

// ## 8. Common Error

// ### Error

//
// role "postgres" does not exist
//

// ### Reason

// Homebrew creates a PostgreSQL role using your **macOS username**, not a `postgres` user.

// ### Solution

// Use your macOS username as the PostgreSQL user instead of `postgres`.

// ---

// ## 9. Useful PostgreSQL Commands

// ### Show current user

//sql
// SELECT current_user;
//

// ### Show current database

//sql
// SELECT current_database();
//

// ### List databases

//sql
// \l
//

// ### List roles

//sql
// \du
//

// ### Connect to another database

//sql
// \c database_name
//

// ### Exit PostgreSQL

//sql
// \q
//

// ---

// ## Project Structure

//
// postgresql-learning/
// │
// ├── README.md
// ├── 01-installation/
// ├── 02-databases/
// ├── 03-tables/
// ├── 04-constraints/
// ├── 05-queries/
// ├── 06-joins/
// ├── 07-functions/
// ├── 08-indexes/
// ├── 09-transactions/
// └── 10-project/
//

// }