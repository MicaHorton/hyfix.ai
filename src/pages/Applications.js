import applications_banner from '../media/applications_banner.png'
import Banner from '../styles/Banner'
import TextSection from '../styles/TextSection'

const Applications = () => (
    <main>
        <Banner>
            <img src={applications_banner} alt="logo" />
        </Banner>

        <TextSection>
            <p>
                The trend in many industries is to embrace IoT, Autonomy and
                Augmented Reality Visualization is creating a large
                high-accuracy positioning market for lower cost devices and
                services. Significant challenges remain in obtaining
                high-accuracy position data using low-cost GNSS receivers due to
                their tendency to obtain poor quality measurements especially in
                challenging environments. HYFIX’s software and services help
                solve these challenges and unlock new applications that benefit
                from high accuracy positioning.
            </p>
        </TextSection>
    </main>
)

export default Applications
