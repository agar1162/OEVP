import { redirect } from 'next/navigation'

export default function OfficeRedirectPage() {
    // In the future, you only need to change this one line: redirect('/office/<current-year-folder>'). For example: redirect('/office/2025')
    redirect('/office/2024')
}