import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {

    try {

        const { email, password } = await request.json();

        const [rows] = await pool.execute(

            "SELECT * FROM users WHERE email=? AND password=?",

            [email, password]

        );

        if (rows.length === 0) {

            return NextResponse.json(

                {

                    success: false,

                    message: "Invalid email or password"

                },

                { status: 401 }

            );

        }

        return NextResponse.json({

            success: true,

            user: rows[0]

        });

    }

    catch (error) {

        console.log(error);

        return NextResponse.json(

            {

                success: false,

                message: "Server Error"

            },

            {

                status: 500

            }

        );

    }

}