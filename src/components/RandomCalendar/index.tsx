import React from "react";
import { Container } from './styles'
import Heatmap from 'react-calendar-heatmap'
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'

interface HeatmapValue {
    date: Date
    count: number
}

const RandomCalendar: React.FC = () => {

    const startDate = subYears(new Date(), 1)
    const endDate = new Date()

  return (
    <Container>
        <div className="wrapper">
            <Heatmap
                showWeekdayLabels
                startDate={startDate}
                endDate={endDate}
                values={generateHeatmapValues(startDate, endDate)}
                gutterSize={3.5}
                classForValue={(item: HeatmapValue) => {

                    let clamped_count = 0

                    if (item !== null) {
                        clamped_count = Math.max(item.count, 0)
                        clamped_count = Math.min(item.count, 4)
                    }

                    return `scale-${clamped_count}`
                }}
            />
        </div>

        <span>
            Learn how we count contributions
        </span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
    const values: HeatmapValue[] = []

    let currentDate = startDate

    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        const counter = Math.round(Math.random() * 4);

        values.push({
            date: currentDate,
            count: counter
        })

        currentDate = addDays(currentDate, 1)
    }

    return values
}

export default RandomCalendar;
