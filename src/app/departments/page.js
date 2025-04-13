// src/app/departments/page.js
import { redirect } from 'next/navigation'

export default function DepartmentsRedirectPage() {
    // In the future, you only need to change this one line: redirect('/departments/<current-year-folder>'). For example: redirect('/departments/2025')
    redirect('/departments/2024') // Dynamically change this later when adding more years
}